function showPage(pageId) {
    // 모든 페이지를 숨김
    const pages = document.querySelectorAll('.content');
    pages.forEach(page => {
        page.classList.add('hidden');
    });

    // 선택된 페이지 표시
    document.getElementById(pageId).classList.remove('hidden');
}
