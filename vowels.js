const soln = (s) => {
    const v = "aeiou";
    let max = 0;
    const vowelsStart = [];
    s.split("").filter((c, index) => {
      if (c === "a") return vowelsStart.push(index);
    });
    while (vowelsStart.length) {
      console.log(vowelsStart);
      let tempMax = 0;
      let vp = 0;
      let sp = vowelsStart.shift();
      while (sp <= s.length - 1) {
        console.log("---comparing---", s[sp], v[vp], sp, vp, tempMax);
        if (s[sp] === v[vp]) {
          if (vp < v.length - 1) vp++;
          sp++;
          tempMax++;
        } else {
          sp++;
        }
      }
      console.log("--tempmax--", tempMax);
      max = Math.max(max, tempMax);
    }
    return max;
  };
  
  console.log(soln("aeiouaeiooouu"));