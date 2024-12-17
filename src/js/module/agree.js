// チェックボックスとボタンの状態を更新する関数
function updateSubmitButtonState(checkbox, button) {
  if (checkbox.checked === true) {
    button.disabled = false; // disabledを外す
  } else {
    button.disabled = true; // disabledを付与
  }
}

// イベントリスナーを設定する関数
function setupAgreeCheckboxListener() {
  const agreeCheckbox = document.getElementById("contact__agree");
  const submitBtn = document.getElementById("button__submit");

  agreeCheckbox.addEventListener("click", () => {
    updateSubmitButtonState(agreeCheckbox, submitBtn);
  });
}

// 必要に応じてエクスポート
export { setupAgreeCheckboxListener };