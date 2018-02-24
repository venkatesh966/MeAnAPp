function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  
  async function add1(x) {

    const a = await resolveAfter2Seconds(20);
    const c=   resolveAfter2Seconds(30);
    const b = await resolveAfter2Seconds(40);
    return x + a + b +await c + " " + "this is from add1";

  }
  
  
  async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    const p_c = resolveAfter2Seconds(40);
    return x + await p_a + await p_b +await p_c+" "+"this is from add2";
  }
  
  add1(10).then(v => {
    console.log(v);  // prints  after 4 seconds.
  });

  add2(10).then(v => {
    console.log(v);  // prints  after 2 seconds.
  });

 