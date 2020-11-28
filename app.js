// $(セレクタ).メソッド (パラメータ);

// $(document).ready(function () {
//   $('body').html('<h1>Hello jquery!!</h1>');
//   // jqueryプログラムの内容
// });

// 省略形
// $(function(){
//   jqueryプログラムの内容
// });

// $(function () {
//   $('.box1').css({
//     'background-color': '#0000ff',
//     'height': '100px'
//   });
// });

// ↓非表示から表示(上から下)
// $(function () {
//   $('.box1').slideDown();
// });

// ↓非表示の要素を表示させる
// $(function () {
//   $('.box1').show();
//   $('.box1').css({ 'background-color': '#0000ff' });
// });

// ↓一瞬の点滅
// $(function () {
//   $('.box1').hide();
// });

// 上から下へスライド後,色、大きさ変更後、下から上へスライド
// $(function () {
//   $('.box1').slideDown(function () {
//     $('.box1').css({
//       'background-color': '#0000ff',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp();
//   });
// });

// ↓マウスオーバー(アウト)
// $(function () {
//   $('.box1').mouseover(function () {
//     $('.box1').css({ 'background-color': '#0000ff' });
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').css({ 'background-color': '#ff0000' });
//   });
// });

// クラス追加/解除
// .addClass() 対象のHTML要素にclass属性を追加
// .removeClass() 要素に設定されているclass属性が解除
// $(function () {
//   $('.box1').mouseover(function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

// マウスクリックイベント
// 72行目  .click()の場合クリックされた時点でイベントが終わってしまうが、.onだとクリック後に複数のイベントが行える
// $(function () {
//   $('.box1').on('click', function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function () {
//   $('.bg1').on('click', function () {
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function () {
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function () {
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function () {
//     $('.bg4').slideUp();
//   });
// });
// thisを使用
// 「box1classの正方形がクリックされたとき、this(クリックされた要素)のみslideUpさせる」
// $(function () {
//   $('.box1').on('click', function () {
//     $(this).slideUp();
//   });
// });

// childrenを使用
// ボタンをクリックしたときに「ul要素のchildren(子要素)(li)」の色を変更
$(function () {
  $('button').on('click', function () {
    $('ul').children().css('color', 'red');
  });
});