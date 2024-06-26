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
