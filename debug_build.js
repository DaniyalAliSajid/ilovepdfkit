import { exec } from 'child_process';
import { writeFileSync } from 'fs';

exec('npm run build', { cwd: './blog' }, (error, stdout, stderr) => {
    const output = `STDOUT:\n${stdout}\n\nSTDERR:\n${stderr}\n\nERROR:\n${error}`;
    writeFileSync('build_debug.log', output);
    console.log('Build output captured to build_debug.log');
});
