$(document).ready(function () {
  let isRotated = false;

  $("#floatingButton").click(function () {
    isRotated = !isRotated;
    $(this).toggleClass("rotate-45");
    $("#menu").toggleClass("translate-x-80");
  });

  $("#postLink").click(function (e) {
    let currentUserVal = checkUserAuth(); // Implement this function
    if (!currentUserVal) {
      e.preventDefault();
      showSignInCard(); // Implement this function
    }
  });

  function checkUserAuth() {
    return false; // Mock: Change this logic as needed
  }

  function showSignInCard() {
    alert("Show Sign-In Card"); // Replace with actual sign-in UI
  }

  function renderBlog(blog, currentUserVal, pathname) {
    let redirect = currentUserVal
      ? pathname === "/profile"
        ? `/profile/blog/${blog.id}`
        : `/blog/${blog.id}`
      : "#";
    const date = new Date(blog.createdAt);

    let blogHtml = `
        <a href="${redirect}" class="border border-gray-300 rounded-xl p-8 mt-4 block">
            <div class="flex items-center gap-3 mb-2">
                <div class="border border-gray-600 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </div>
                <div class="text-4xl max-w-full overflow-hidden">${
                  blog.title
                }</div>
            </div>
            <div class="flex gap-4 items-center">
                <div class="text-sm text-gray-500">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</div>
                <div class="text-m text-gray-700"><b>${
                  blog.readingTime
                }</b> mins read</div>
            </div>
            <div class="mt-2 text-2xl max-w-full">${blog.content}</div>
        </a>`;

    $("#blogContainer").append(blogHtml);
  }

  let blog = {
    id: 1,
    title: "Sample Blog",
    content: "This is a sample content.",
    createdAt: new Date(),
    readingTime: 5,
  };
  let currentUserVal = true; // Mock authentication status
  let pathname = window.location.pathname;
  renderBlog(blog, currentUserVal, pathname);
});
