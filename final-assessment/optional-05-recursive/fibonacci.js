function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const arr = fibonacci(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
