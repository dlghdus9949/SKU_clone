document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.querySelector('.nav2-container');
    const sungkyulImg = document.querySelector('.nav2-sungkyulimg img');
    const navLinks = navContainer.querySelectorAll('.nav2-index a');
    const dots = document.querySelectorAll('.dot-grid .dot');
    const searchIcon = document.querySelector('.search-icon');
    const dropdownButton = document.querySelector('.nav1-earth');
    const dropdownMenu = document.querySelector('.nav-hamburger-menu');
    const navItems = document.querySelectorAll('.nav2-index a:not(.search-icon):not(.dot-grid)');
    const navSearchIcon = document.getElementById("search-icon-click");

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
                    dropdown.style.display = 'none';
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

    //nav 글씨에 마우스 올리면 세부 사항들 표시
    
    
});
