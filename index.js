<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav2-container');
    const sungkyulImg = document.querySelector('.nav2-sungkyulimg img');
    const navLinks = navContainer.querySelectorAll('.nav2-index a');
    const dots = document.querySelectorAll('.dot-grid .dot');
    const searchIcon = document.querySelector('.search-icon');
    const dropdownButton = document.querySelector('.nav1-earth');
    const dropdownMenu = document.querySelector('.nav-hamburger-menu');
    let navItems = document.querySelectorAll('.nav2-index a:not(.search-icon):not(.dot-grid)');
    const navSearchIcon = document.getElementById("search-icon-click");
    const dropdownText = document.querySelector('.nav-HiddenText-index');
    const skuintro = document.getElementById('skuintro');
    const col = document.getElementById('col');
    const entercol = document.getElementById('enter-col');
    const collife = document.getElementById('collife');
    const service = document.getElementById('service');
    const place = document.getElementById('place');
    const dropdownContent = document.querySelector('.dropdown-content'); // 실제 사용하는 드롭다운 박스 선택자로 수정
    const SerdropdownContent = document.querySelector('.ser-dropdown-content');
    const LifedropdownContent = document.querySelector('.life-dropdown-content');
    const EnterdropdownContent = document.querySelector('.enter-dropdown-content');
    const ColdropdownContent = document.querySelector('.col-dropdown-content');
    const placedropdownContent = document.querySelector('.place-dropdown-content');


    // 네비게이션 컨테이너에 마우스 이벤트 추가
    navContainer.addEventListener('mouseenter', function() {
        navContainer.style.backgroundColor = 'white';
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
        sungkyulImg.classList.add('blue');
        dots.forEach(dot => {
            dot.style.backgroundColor = 'red';
        });
        searchIcon.classList.add('blue');
    });

    navContainer.addEventListener('mouseleave', function() {
        navContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
        sungkyulImg.classList.remove('blue');
        dots.forEach(dot => {
            dot.style.backgroundColor = '';
        });
        searchIcon.classList.remove('blue');
    });

    // nav 언어버튼 메뉴 슬라이드
    dropdownButton.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function() {
        dropdownMenu.style.display = 'none';
    });

    dropdownMenu.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    // nav 글씨에 마우스 올렸을 때 흰색 박스 세부 메뉴, 파란줄
    navItems.forEach(item => {
        const span = item.querySelector('span');
        if (span) {
            const spanWidth = span.offsetWidth;

            item.addEventListener('mouseenter', function() {
                const underline = item.querySelector('.underline'); 
                if (underline) {
                    underline.style.width = `${spanWidth}px`; 
                }

                const dropdown = this.querySelector('.dropdown-content');
                if (dropdown) {
                    dropdown.style.display = 'block';
                }
            });

            item.addEventListener('mouseleave', function() {
                const dropdown = this.querySelector('.dropdown-content');
                if (dropdown) {
                    setTimeout(() => {
                        dropdown.style.display = 'none';
                    }, 200);
                }
            });
        }
    });

    // 돋보기를 클릭하면 검색박스 표시, 숨김
    searchIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        if (navSearchIcon.style.display === 'flex') {
            navSearchIcon.style.display = 'none';
        } else {
            navSearchIcon.style.display = 'flex';
        }
    });

    // 다른 곳을 클릭하면 검색박스 숨김
    document.addEventListener('click', function() {
        navSearchIcon.style.display = 'none';
    });

    navSearchIcon.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    /////글씨 올렸을 때 세부항목

    skuintro.addEventListener('mouseenter', function() {
        dropdownText.style.display = 'grid';
    });

    skuintro.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdownText.matches(':hover')) {
                dropdownText.style.display = 'none';
            }
        }, 200);
    });

    // "성결소개" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    skuintro.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    dropdownContent.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    dropdownContent.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    // "성결소개" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    skuintro.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });

    // "대학/대학원" 항목
    col.addEventListener('mouseenter', function() {
        dropdownText.style.display = 'grid';
    });

    col.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!dropdownText.matches(':hover')) {
                dropdownText.style.display = 'none';
            }
        }, 200);
    });

    // "대학/대학원" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    col.addEventListener('mouseenter', function() {
        ColdropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    ColdropdownContent.addEventListener('mouseleave', function() {
        ColdropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    ColdropdownContent.addEventListener('mouseenter', function() {
        ColdropdownContent.style.display = 'block';
    });

    // "대학/대학원" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    col.addEventListener('mouseleave', function() {
        ColdropdownContent.style.display = 'none';
    });

    // "입학안내" 항목
    entercol.addEventListener('mouseenter', function() {
        EnterdropdownContent.style.display = 'grid';
    });

    entercol.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!EnterdropdownContent.matches(':hover')) {
                EnterdropdownContent.style.display = 'none';
            }
        }, 200);
    });

    // "입학안내" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    entercol.addEventListener('mouseenter', function() {
        EnterdropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    EnterdropdownContent.addEventListener('mouseleave', function() {
        EnterdropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    EnterdropdownContent.addEventListener('mouseenter', function() {
        EnterdropdownContent.style.display = 'block';
    });

    // "입학안내" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    entercol.addEventListener('mouseleave', function() {
        EnterdropdownContent.style.display = 'none';
    });

    // "대학생활" 항목
    collife.addEventListener('mouseenter', function() {
        LifedropdownContent.style.display = 'grid';
    });

    collife.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!LifedropdownContent.matches(':hover')) {
                LifedropdownContent.style.display = 'none';
            }
        }, 200);
    });

    // "대학생활" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    collife.addEventListener('mouseenter', function() {
        LifedropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    LifedropdownContent.addEventListener('mouseleave', function() {
        LifedropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    LifedropdownContent.addEventListener('mouseenter', function() {
        LifedropdownContent.style.display = 'block';
    });

    // "대학생활" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    collife.addEventListener('mouseleave', function() {
        LifedropdownContent.style.display = 'none';
    });

    // "서비스" 항목
    service.addEventListener('mouseenter', function() {
        SerdropdownContent.style.display = 'grid';
    });

    service.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!SerdropdownContent.matches(':hover')) {
                SerdropdownContent.style.display = 'none';
            }
        }, 400);
    });

    // "서비스" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    service.addEventListener('mouseenter', function() {
        SerdropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    SerdropdownContent.addEventListener('mouseleave', function() {
        SerdropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    SerdropdownContent.addEventListener('mouseenter', function() {
        SerdropdownContent.style.display = 'block';
    });

    // "서비스" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    service.addEventListener('mouseleave', function() {
        SerdropdownContent.style.display = 'none';
    });


    // "광장" 항목
    place.addEventListener('mouseenter', function() {
        placedropdownContent.style.display = 'grid';
    });

    place.addEventListener('mouseleave', function() {
        setTimeout(() => {
            if (!placedropdownContent.matches(':hover')) {
                placedropdownContent.style.display = 'none';
            }
        }, 400);
    });

    // "place" 항목에 마우스를 올렸을 때 드롭다운 박스 표시
    place.addEventListener('mouseenter', function() {
        placedropdownContent.style.display = 'block';
    });

    // 마우스를 드롭다운 박스 바깥으로 이동했을 때 숨김
    placedropdownContent.addEventListener('mouseleave', function() {
        placedropdownContent.style.display = 'none';
    });

    // 추가적으로, 드롭다운 박스에 마우스를 올렸을 때도 드롭다운 박스가 유지되어야 합니다.
    placedropdownContent.addEventListener('mouseenter', function() {
        placedropdownContent.style.display = 'block';
    });

    // "서비스" 항목에 마우스를 떠났지만, 드롭다운 박스에 마우스를 올리면 다시 표시됩니다.
    place.addEventListener('mouseleave', function() {
        placedropdownContent.style.display = 'none';
    });
});
=======
// 호연
$(document).ready(function () {
  // Slick 슬라이더 초기화
  $(".slick-track").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // 2초마다 슬라이드 전환
    arrows: false,
    dots: false, // slick 슬라이더 자체에서는 dots를 false로 설정
  });

  // HTML 요소 가져오기
  const track = document.querySelector(".obj4 .slick-track");
  const slides = Array.from(track.children);
  const totalSlides = slides.length;
  const nextButton = document.querySelector(".obj4 .next");
  const prevButton = document.querySelector(".obj4 .prev");
  const stopButton = document.querySelector(".obj4 .stop");
  let currentSlideIndex = 0;
  let slideInterval;

  // 함수: 슬라이드 위치 업데이트
  const updateSlidePosition = () => {
    const slideIndex = $(".slick-track").slick("slickCurrentSlide"); // 현재 slick 슬라이드의 인덱스 가져오기
    currentSlideIndex = slideIndex; // JavaScript 슬라이드와 동기화

    const offset = -currentSlideIndex * slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(${offset}px)`;
    updateCounter(); // 카운터 업데이트 호출
  };

  // 함수: 카운터 업데이트
  const updateCounter = () => {
    const currentSlideNumber = currentSlideIndex + 1;
    document.querySelector(".obj4 .count .now").textContent = String(
      currentSlideNumber
    ).padStart(2, "0");
  };

  // 함수: 다음 슬라이드로 이동
  const moveToNextSlide = () => {
    $(".slick-track").slick("slickNext"); // slick 슬라이더 다음으로 이동
    updateSlidePosition();
  };

  // 함수: 이전 슬라이드로 이동
  const moveToPrevSlide = () => {
    $(".slick-track").slick("slickPrev"); // slick 슬라이더 이전으로 이동
    updateSlidePosition();
  };

  // 함수: 슬라이드 쇼 시작
  const startSlideShow = () => {
    slideInterval = setInterval(moveToNextSlide, 2000); // 2초마다 슬라이드 전환
  };

  // 함수: 슬라이드 쇼 정지
  const stopSlideShow = () => {
    clearInterval(slideInterval);
  };

  // 이벤트 리스너: 다음 버튼 클릭 시
  nextButton.addEventListener("click", () => {
    stopSlideShow();
    moveToNextSlide();
    startSlideShow();
  });

  // 이벤트 리스너: 이전 버튼 클릭 시
  prevButton.addEventListener("click", () => {
    stopSlideShow();
    moveToPrevSlide();
    startSlideShow();
  });

  // 이벤트 리스너: 정지 버튼 클릭 시
  stopButton.addEventListener("click", stopSlideShow);

  // 초기 슬라이드 위치 설정 및 카운터 업데이트
  updateSlidePosition();

  // 슬라이드 쇼 시작
  startSlideShow();
});
// 호연
>>>>>>> 호연
