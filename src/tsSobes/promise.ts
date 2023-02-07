export const functPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Tamila",
      });
    }, 2000);
  });

  promise.then((data: any) => {
    data.name = "Vasy";
    console.log(data);
  });
};
