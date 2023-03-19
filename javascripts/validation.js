// window.onload = function() {
//     const forms = document.forms;
//     console.log(forms[0].name);
// };

// window.onload = function() {
//     const forms = document.forms;
//     forms[0].name.value = "お名前を入力してください";
// };

// function confirmSubmit() {
//     const forms = document.forms;
//     forms[0].onsubmit = function() {
//         const name = forms[0].name.value;
//         if(!(confirm(`${name}さん、本当に送信しますか？`))) {
//             alert("キャンセルされました");
//             return false;
//         }
//     };
// };
// window.onload = confirmSubmit;

// function emailValidation() {
//     const form = document.getElementById("form"); // formオブジェクトの取得
//     form.onsubmit = function() { // イベントハンドラの登録
//         if(form.email.value !== form.email_confirm.value) { // Eメール欄とEメール(確認）欄の比較と条件分岐
//             const element = document.createElement("p"); // p要素を作成
//             const message = document.createTextNode("Eメールが一致しません"); // p要素の中のテキストノード作成
//             element.appendChild(message); // p要素に追加
//             form.appendChild(element); // 作成したp要素をform要素に追加
//             element.classList.add("alert"); // 後で追加したコード
//             return false; // 送信をキャンセル
//         }
//     };
// };
// window.onload = emailValidation;

// function emailValidation() {
//     const form = document.getElementById("form"); // formオブジェクトの取得
//     form.addEventListener('submit', function(e) {
//         if(form.email.value !== form.email_confirm.value) {
//             e.preventDefault();
//             const element = document.createElement('p')
//             const message = document.createTextNode("Eメールが一致しません")

//             form.appendChild(element);
//             element.appendChild(message);
//             element.classList.add("alert");

//             setTimeout(function() {
//                 form.removeChild(element);
//             }, 3000);
//         }
//     });
// };
// window.onload = emailValidation;

function emailValidation() {
    const form = document.getElementById('form');
    const emailComfirmField = document.getElementById('email_confirm');
    const contentField = document.getElementById('content_field');

    const element = document.createElement('p');
    const message = document.createTextNode("Eメールが一致しません");

    emailComfirmField.addEventListener('input', e => {
        e.preventDefault();
        if(form.email.value !== form.email_confirm.value) {
            if (!document.getElementById('alert')) {
                form.appendChild(element);
                element.appendChild(message);
                element.setAttribute('id', 'alert');
                element.classList.add("alert_color");
                contentField.parentNode.insertBefore(element, contentField);
                emailComfirmField.classList.add("alert_bg");
            }
        } else {
            emailComfirmField.classList.remove("alert_bg");
            element.parentNode.removeChild(element);
        }
    });
};
window.onload = function() {
    emailValidation();
};  