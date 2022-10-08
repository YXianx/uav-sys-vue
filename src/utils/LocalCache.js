// 操作localstorage工具类
class LocalCache {
    setCache(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    getCache(key) {
        const value = window.localStorage.getItem(key)
        if (value) {
          return JSON.parse(value)
        }
    }

    removeCache(key) {
        window.localStorage.removeItem(key)
    }

    clearCache() {
        window.localStorage.clear()
    }
}

export default new LocalCache() 