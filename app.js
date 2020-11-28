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
$(function () {
  $('.box1').slideDown(function () {
    $('.box1').css({
      'background-color': '#0000ff',
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});

// 一つのcss時の書き方
// $('セレクタ').css('background-color','#0000ff');
// 複数時の書き方
// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',
//   :

//   'プロパティn': '値n'
// });