let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
        
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;

      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }

      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;

        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })

    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return; 
      this.holdingPaper = true;
      
      paper.style.zIndex = highestZ;
      highestZ += 1;
      
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper();
  p.init(paper);
});


document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes-btn");
  const noBtn = document.getElementById("no-btn");
  let swapCount = 0;
  // Listen for hover only on the button that currently has data-answer "no"
  [yesBtn, noBtn].forEach(btn => {
    btn.addEventListener("mouseover", (e) => {
      if (e.target.dataset.answer === "no") {
        swapButtons();
      }
    });
  });
  function swapButtons() {
    // Swap the data-answer attributes between the buttons
    const temp = yesBtn.dataset.answer;
    yesBtn.dataset.answer = noBtn.dataset.answer;
    noBtn.dataset.answer = temp;
    swapCount++
    console.log(swapCount)
    // Update the inner HTML based on the new data-answer values
    if (yesBtn.dataset.answer === "yes") {
      yesBtn.innerHTML = "Yes 💖";
      noBtn.innerHTML = "No 😜";
    } else {
      yesBtn.innerHTML = "No 😜";
      noBtn.innerHTML = "Yes 💖";
    }
    if (swapCount === 1) {
      alert("I'm going to pretend i didn't see that ");
    }
    if (swapCount === 2) {
      alert("oookayy? might have been a mistake? again? 🫠");
    }
    if (swapCount === 3) {
      alert("Haww 🥹 i'll let you think about it again");
    }
    if (swapCount === 4) {
      alert("Aashureeeeee whyyyy 😭");
    }
    if (swapCount === 5) {
      alert("Itna desperately nhi banna chahte...");
    }
    if (swapCount === 6){
      alert("stop...")
    }
    if (swapCount === 7) {
      alert("...");
    }
    if (swapCount === 9) {
      alert("🙂🙂🙂 hahaha okay jokes aside now...");
    }
    if (swapCount === 10) {
      alert("..?");
    }
    if (swapCount === 13) {
      alert("😐 it's not funny anymore...");
    }
    if (swapCount === 15) {
      alert("You must have realised by now though...");
    }
    if (swapCount === 18) {
      alert("You Have No Choice Darling 🥰");
    }
    if (swapCount === 25) {
      alert("Come onnn bhyi haan bhi bolde 😴");
    }
    if (swapCount === 30) {
      alert("Playing Hard To Get Are We...");
    }
    if (swapCount === 35) {
      alert("You did this to yourself babygirl 🎀");
      yesBtn.innerHTML = "Yes 💖";
      noBtn.innerHTML = "Yes 💖";
      const temp = noBtn.dataset.answer;
      yesBtn.dataset.answer = temp;
    }
  }
  yesBtn.addEventListener("click", () => {
    document.querySelectorAll('.papers-container').forEach(paper => {
      paper.classList.add('fade-out');
  });
  document.querySelectorAll('.valentine-box').forEach(ement => {
    ement.classList.add('fade-out');
    });
  setTimeout(() => {
    startAnimation();
  }, 1000);
  });

  noBtn.addEventListener("click", () => {
    document.querySelectorAll('.papers-container').forEach(paper => {
      paper.classList.add('fade-out');
  });
  document.querySelectorAll('.valentine-box').forEach(ement => {
    ement.classList.add('fade-out');
    });
  setTimeout(() => {
    startAnimation();
  }, 1000);
  });
});

function startAnimation() {
  document.querySelector('.post-container').classList.add('animate');
  document.querySelector('.post-container').style.zIndex = 1000;
  document.querySelector('.container').style.visibility = 'hidden';
  document.querySelector('.top-right-btn').style.visibility = 'visible';
  document.querySelector('.top-right-btn').style.animation = 'fadeIn 1s ease-out 4s forwards';
}