const header = document.querySelector("header");

let lastScrollPosition = window.scrollY;

window.onscroll = () => {
	const currentScrollPosition = window.scrollY;

	if (
		currentScrollPosition < 5 ||
		Math.abs(currentScrollPosition - lastScrollPosition) < 2
	) {
		return;
	}

	if (currentScrollPosition > lastScrollPosition) {
		// Прокрутка вниз: ховаємо хедер плавно
		header.style.transition = "opacity 0.5s ease";
		header.style.visibility = "hidden";
		header.style.opacity = 0;
	} else {
		// Прокрутка вгору: показуємо хедер плавно
		header.style.transition = "opacity 0.9s ease";
		header.style.opacity = 1;
		header.style.visibility = "visible";
	}

	lastScrollPosition = currentScrollPosition;
};

const elementsScroll = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Виконати анімацію, коли елемент стає видимим
			entry.target.style.opacity = 1;
			entry.target.style.transform = "translateY(0)";
		}
	});
});

elementsScroll.forEach((element) => {
	observer.observe(element);
});

const closeButton = document.getElementById("close-icon");
const openButton = document.getElementById("menu");
const blockToClose = document.getElementById("mobile-header");
const blockToClose1 = document.getElementById("container-header");

openButton.addEventListener("click", function () {
	// Змініть стиль блоку, щоб його приховати (змініть display на "none")
	blockToClose.style.display = "flex";
	blockToClose1.style.display = "none";
});

// Додайте обробник події на кнопку
closeButton.addEventListener("click", function () {
	// Змініть стиль блоку, щоб його приховати (змініть display на "none")
	blockToClose1.style.display = "flex";
	blockToClose.style.display = "none";
});

// var rotateImage = document.getElementById("rotateImage");

// rotateImage.addEventListener("click", function () {
// 	rotateImage.classList.toggle("rotate");
// });

// let containerVisible = false;
// const container = document.getElementById('container');
// const elements = document.querySelectorAll('.element');

// function toggleContainer() {
//     if (containerVisible) {
//         container.style.height = '0';
//         container.style.overflow = 'hidden';
//         elements.forEach(element => {
//             element.style.transform = 'translateY(100%)';
//         });
//     } else {
//         container.style.height = '100%'; // Встановіть відповідну висоту
//         container.style.overflow = 'visible';
//         elements.forEach((element, index) => {
//             const translateYValue = index === 0 ? '0' : '100%';
//             element.style.transform = `translateY(${translateYValue})`;
//         });
//     }

//     containerVisible = !containerVisible;
// }

// let containerVisible = false;
// const container = document.getElementById('container');
// const elements = document.querySelectorAll('.element');

// function toggleContainer() {
//     container.classList.toggle('visible', !containerVisible);
//     container.style.height = containerVisible ? '0' : 'auto';
//     elements.forEach((element, index) => {
//         const delay = containerVisible ? 0 : index * 0.1; // Затримка для кожного елемента
//         element.style.transitionDelay = `${delay}s`;
//         const translateYValue = containerVisible ? '100%' : '0';
//         element.style.transform = `translateY(${translateYValue})`;
//     });

//     containerVisible = !containerVisible;
// }

// let containerVisible = false;
// const container = document.getElementById("container");
// const elements = document.querySelectorAll(".element");

// function toggleContainer() {
// 	container.classList.toggle("visible", !containerVisible);

// 	if (!containerVisible) {
// 		container.style.maxHeight = "7372px";
// 		container.classList.remove("hidden");
// 		elements.forEach((element, index) => {
// 			const delay = index * 0.1;
// 			element.style.transition = `transform 0.5s ease-in-out ${delay}s, opacity 0.5s ease-in-out ${delay}s`;
// 			element.style.opacity = 1;
// 			element.style.transform = "translateY(0)";
// 		});
// 	} else {
// 		container.style.maxHeight = "0";
// 		elements.forEach((element, index) => {
// 			const delay = index * 0.1;
// 			element.style.transition = `transform 0.5s ease-in-out ${delay}s, opacity 0.5s ease-in-out ${delay}s`;
// 			element.style.opacity = 0;
// 			element.style.transform = "translateY(20px)";
// 		});
// 	}

// 	containerVisible = !containerVisible;
// }

function adjustStructure() {
	const routesContainer = document.getElementById('routes-container');
	const routes1Line = routesContainer.querySelector('.routes1-line');
  
	if (window.innerWidth < 395) {
	  if (!document.querySelector('.second-line')) {
		// Create new div for the last part
		const newDiv = document.createElement('div');
		newDiv.classList.add('routes1-line', 'second-line');
  
		// Move the last elements to the new div
		const mshanetsImg = routes1Line.querySelector('img:last-of-type');
		const mshanetsP = routes1Line.querySelector('p.Mshanets');
		const mshanetsLine = routes1Line.querySelector('div.line:last-of-type');
  
		if (mshanetsImg && mshanetsP && mshanetsLine) {
		  newDiv.appendChild(mshanetsLine.cloneNode());
		  newDiv.appendChild(mshanetsImg.cloneNode());
		  newDiv.appendChild(mshanetsP.cloneNode());
  
		  routesContainer.appendChild(newDiv);
  
		  // Remove the moved elements from the original div
		  mshanetsImg.remove();
		  mshanetsP.remove();
		  mshanetsLine.remove();
		}
	  }
	} else {
	  // Revert back to the original structure if the screen size is more than 395px
	  const secondLine = document.querySelector('.second-line');
	  if (secondLine) {
		const mshanetsImg = secondLine.querySelector('img');
		const mshanetsP = secondLine.querySelector('p.Mshanets');
		const mshanetsLine = secondLine.querySelector('div.line');
  
		if (mshanetsImg && mshanetsP && mshanetsLine) {
		  routes1Line.appendChild(mshanetsLine.cloneNode());
		  routes1Line.appendChild(mshanetsImg.cloneNode());
		  routes1Line.appendChild(mshanetsP.cloneNode());
		}
  
		secondLine.remove();
	  }
	}
  }
  
  // Initial check
  adjustStructure();
  
  // Add event listener for window resize
  window.addEventListener('resize', adjustStructure);
  