export function validateForm(validationForm) {
  const errorClassName = 'error';
  const parentErrorClassName = 'errorwrapper';
  const requiredElems = validationForm.querySelectorAll('.required');
  const emailElems = validationForm.querySelectorAll('.email');
  const telElems = validationForm.querySelectorAll('.tel');
  const maxlengthElems = validationForm.querySelectorAll('.maxlength');
  const kana = validationForm.querySelectorAll('.kana');

  const createError = (elem, errorMessage) => {
    const errorSpan = document.createElement('p');
    errorSpan.classList.add(errorClassName);
    errorSpan.setAttribute('aria-live', 'polite');
    errorSpan.textContent = errorMessage;
    elem.parentNode.appendChild(errorSpan);

    // 親のdivにクラスを追加
    if (elem.parentNode.tagName.toLowerCase() === 'div') {
      elem.parentNode.classList.add(parentErrorClassName);
    }
  };

  validationForm.addEventListener('submit', (e) => {
    const errorElems = validationForm.querySelectorAll('.' + errorClassName);
    errorElems.forEach((elem) => {
      elem.remove();
    });

    // 親のdivからクラスを削除
    const parentErrorElems = validationForm.querySelectorAll('.' + parentErrorClassName);
    parentErrorElems.forEach((elem) => {
      elem.classList.remove(parentErrorClassName);
    });

    requiredElems.forEach((elem) => {
      const elemValue = elem.value.trim();
      if (elemValue.length === 0) {
        createError(elem, '入力は必須です');
        e.preventDefault();
      }
    });

    emailElems.forEach((elem) => {
      const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
      if (elem.value !== '') {
        if (!pattern.test(elem.value)) {
          createError(elem, 'Email アドレスの形式が正しくないようです。');
          e.preventDefault();
        }
      }
    });

    telElems.forEach((elem) => {
      const pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
      if (elem.value !== '') {
        if (!pattern.test(elem.value)) {
          createError(elem, '電話番号の形式が正しくないようです。');
          e.preventDefault();
        }
      }
    });

    kana.forEach((elem) => {
      const pattern = /^[ァ-ヶー]+$/;
      if (elem.value !== '') {
        if (!pattern.test(elem.value)) {
          createError(elem, '全角カナでご入力ください');
          e.preventDefault();
        }
      }
    });

    maxlengthElems.forEach((elem) => {
      const maxlength = elem.dataset.maxlength;
      if (elem.value !== '') {
        if (elem.value.length > maxlength) {
          createError(elem, maxlength + '文字以内でご入力ください');
          e.preventDefault();
        }
      }
    });

    const errorElem = validationForm.querySelector('.' + errorClassName);
    if (errorElem) {
      const errorElemOffsetTop = errorElem.offsetTop;
      window.scrollTo({
        top: errorElemOffsetTop - 40,
        behavior: 'smooth'
      });
    }
  });
}

export function initializeValidation() {
  document.addEventListener('DOMContentLoaded', () => {
    const validationForm = document.querySelector('.js-contactForm');
    if (validationForm) {
      validateForm(validationForm);
    }
  });
}