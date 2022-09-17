function loops() {
    let a = ['data1', 2, true];
  
    // foreach = value
    a.forEach((element) => {
      console.log(`${element}`); // >>> data1, 2, true
    });
  
    let mapA = {
      data1: 'data1',
      data2: 2,
      data3: true,
    };
  
    // for..in only index/key
    for (i in mapA) {
      console.log(`${i}: ${mapA[i]}`);
    }
  
    let newMap = new Map([
      ['data1', 'data1'],
      ['data2', 2],
      ['data3', true],
    ]);
  
    // for..of with key and value
    for (const [i, v] of newMap) {
      console.log(`${i}: ${v}`);
    }
  }

  function scope(){
    /* Block Scope */
    // 'var' is global even if you declared inside {} block
    // 'let' & 'const' is local if you declare it inside {}
    {
        var a = 'a'
        let b = "b"
    }
    console.log(a) // accessible
    console.log(b) // inaccessible

    /* Function Scope */
    // 'var', 'let', and 'const' are inaccessible outside function

    (function(){
        var a = "a"
        let b = "b"
        const c = "c"

        // accessible
        console.log(a)
        console.log(b) 
        console.log(c) 
    })()
    console.log(a) // inaccessible
    console.log(b) // inaccessible
    console.log(c) // inaccessible
  }
  
  loops();

  // Async and Promises
  