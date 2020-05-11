export const toastManager = {
  subscribe(callback) {
    this.callback = callback;
  },
  defaultOptions() {
    return {
      delay: 0,
      timeout: 2000,
      position: 'top-center'
    };
  },
  add(content, options) {
    const mergedOptions = { ...this.defaultOptions(), ...options };
    const timeoutId = setTimeout(() => {
      this.callback('ADD', content, { ...mergedOptions, id: timeoutId });
    }, mergedOptions.delay);
    return timeoutId;
  },
  remove(id) {
    this.callback('REMOVE', null, { id })
    return true;
  }
};

const toast = {
  show: (content, options = {}) => toastManager.add(content, options),
  remove: (id) => toastManager.remove(id)
}

export default toast;
