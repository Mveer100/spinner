let animationArray = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ","\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "]

let delay = 100
for (let i = 0; i < animationArray.length; i++) {
setTimeout(() => {
  process.stdout.write(animationArray[i])
}, delay += 200);
}

