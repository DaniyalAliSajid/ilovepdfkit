import os
import hashlib
import time
import json
import pickle

CACHE_DIR = "cache"
DEFAULT_TTL = 3600 # 1 hour

if not os.path.exists(CACHE_DIR):
    os.makedirs(CACHE_DIR)

def get_hash(data):
    if isinstance(data, bytes):
        return hashlib.sha256(data).hexdigest()
    return hashlib.sha256(str(data).encode()).hexdigest()

def set_cache(key, value, ttl=DEFAULT_TTL):
    if os.environ.get("ENABLE_AI_CACHE", "true").lower() == "false":
        return
    
    file_path = os.path.join(CACHE_DIR, f"{key}.cache")
    try:
        data = {
            "expiry": time.time() + ttl,
            "value": value
        }
        with open(file_path, "wb") as f:
            pickle.dump(data, f)
    except Exception as e:
        print(f"DEBUG: Cache write error: {e}")

def get_cache(key):
    if os.environ.get("ENABLE_AI_CACHE", "true").lower() == "false":
        return None
    
    file_path = os.path.join(CACHE_DIR, f"{key}.cache")
    if not os.path.exists(file_path):
        return None
    
    try:
        with open(file_path, "rb") as f:
            data = pickle.load(f)
            if time.time() > data["expiry"]:
                os.remove(file_path)
                return None
            return data["value"]
    except Exception as e:
        print(f"DEBUG: Cache read error: {e}")
        return None

def clear_old_cache():
    """Cleanup expired cache files."""
    try:
        for filename in os.listdir(CACHE_DIR):
            if filename.endswith(".cache"):
                file_path = os.path.join(CACHE_DIR, filename)
                with open(file_path, "rb") as f:
                    data = pickle.load(f)
                    if time.time() > data["expiry"]:
                        os.remove(file_path)
    except: pass
