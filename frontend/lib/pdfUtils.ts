import { PDFDocument, rgb, degrees } from 'pdf-lib';
import JSZip from 'jszip';

// Helper to convert File to ArrayBuffer
const fileToArrayBuffer = (file: File): Promise<ArrayBuffer> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as ArrayBuffer);
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
};

export const mergePdfsLocal = async (files: File[]): Promise<Uint8Array> => {
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
        const buffer = await fileToArrayBuffer(file);
        const pdfDoc = await PDFDocument.load(buffer);
        const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
    }
    
    return await mergedPdf.save();
};

export const rotatePdfLocal = async (file: File, angle: number): Promise<Uint8Array> => {
    const buffer = await fileToArrayBuffer(file);
    const pdfDoc = await PDFDocument.load(buffer);
    const pages = pdfDoc.getPages();
    
    pages.forEach((page) => {
        const currentRotation = page.getRotation().angle;
        page.setRotation(degrees(currentRotation + angle));
    });
    
    return await pdfDoc.save();
};

export const splitPdfLocal = async (file: File, mode: string, data: string): Promise<{ data: Uint8Array, isZip: boolean }> => {
    const buffer = await fileToArrayBuffer(file);
    const pdfDoc = await PDFDocument.load(buffer);
    const totalPages = pdfDoc.getPageCount();
    
    if (mode === 'single') {
        // Zip all pages into separate PDFs
        const zip = new JSZip();
        for (let i = 0; i < totalPages; i++) {
            const newPdf = await PDFDocument.create();
            const [copiedPage] = await newPdf.copyPages(pdfDoc, [i]);
            newPdf.addPage(copiedPage);
            const pdfBytes = await newPdf.save();
            zip.file(`page_${i + 1}.pdf`, pdfBytes);
        }
        const zipBlob = await zip.generateAsync({ type: 'uint8array' });
        return { data: zipBlob, isZip: true };
    } 
    // Basic fallback for range/extract (returns whole doc for now or custom logic)
    return { data: await pdfDoc.save(), isZip: false };
};

export const deletePdfPagesLocal = async (file: File, pagesToDelete: string): Promise<Uint8Array> => {
    const buffer = await fileToArrayBuffer(file);
    const pdfDoc = await PDFDocument.load(buffer);
    
    // Parse comma separated pages
    const toDelete = pagesToDelete.split(',')
        .map(p => parseInt(p.trim()) - 1)
        .filter(p => !isNaN(p) && p >= 0 && p < pdfDoc.getPageCount())
        .sort((a, b) => b - a); // sort descending to delete safely
        
    for (const pageIndex of toDelete) {
        pdfDoc.removePage(pageIndex);
    }
    
    return await pdfDoc.save();
};

export const imagesToPdfLocal = async (files: File[]): Promise<Uint8Array> => {
    const pdfDoc = await PDFDocument.create();
    
    for (const file of files) {
        const buffer = await fileToArrayBuffer(file);
        let image;
        if (file.type === 'image/jpeg' || file.type === 'image/jpg') {
            image = await pdfDoc.embedJpg(buffer);
        } else if (file.type === 'image/png') {
            image = await pdfDoc.embedPng(buffer);
        } else {
            continue; // Skip unsupported
        }
        
        const page = pdfDoc.addPage([image.width, image.height]);
        page.drawImage(image, {
            x: 0,
            y: 0,
            width: image.width,
            height: image.height,
        });
    }
    
    return await pdfDoc.save();
};

export const unlockPdfLocal = async (file: File, password?: string): Promise<Uint8Array> => {
    const buffer = await fileToArrayBuffer(file);
    // Loading with password will decrypt it
    const pdfDoc = await PDFDocument.load(buffer, { password: password || '' });
    // Saving without password saves it unencrypted
    return await pdfDoc.save();
};

export const addPageNumbersLocal = async (file: File, options: any): Promise<Uint8Array> => {
    const buffer = await fileToArrayBuffer(file);
    const pdfDoc = await PDFDocument.load(buffer);
    const pages = pdfDoc.getPages();
    
    let startPage = options.isCoverPage === 'true' ? 1 : 0;
    let pageNum = parseInt(options.firstNumber) || 1;
    
    for (let i = startPage; i < pages.length; i++) {
        const page = pages[i];
        const { width, height } = page.getSize();
        
        // Simple bottom-center positioning logic
        let x = width / 2 - 10;
        let y = 30; // bottom margin
        
        if (options.position.includes('left')) x = 30;
        if (options.position.includes('right')) x = width - 40;
        if (options.position.includes('top')) y = height - 40;
        
        page.drawText(pageNum.toString(), {
            x,
            y,
            size: 12,
            color: rgb(0, 0, 0),
        });
        pageNum++;
    }
    
    return await pdfDoc.save();
};
