// ドロワーアイコンのクリックイベントを設定
const drawerIcon = document.getElementById("button__header-sp");
const drawerContent = document.getElementById("header__modal");
const btnlabel = document.getElementById("button__header-labelsp");

function setupDrawer() {
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked");
    drawerContent.classList.toggle("is-checked");
    btnlabel.classList.toggle("is-checked");

    if (drawerContent.classList.contains("is-checked")) {
      // メニューが開いている間はスクロールを無効にする
      document.body.style.overflow = "hidden";
    } else {
      // メニューが閉じたらスクロールを有効にする
      document.body.style.overflow = "";
    }
  });

  document.querySelectorAll("#header__modal a").forEach(function (link) {
    link.addEventListener("click", function () {
      drawerIcon.classList.remove("is-checked");
      drawerContent.classList.remove("is-checked");
      btnlabel.classList.remove("is-checked");

      document.body.style.overflow = "";
    });
  });
}

export { setupDrawer };