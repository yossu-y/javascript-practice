for (let row = 1; row <= 9; row++) {
  $('table').find('tbody').append('<tr><th>' + row + '</th></tr>');
  for (let column = 1; column <= 9; column++) {
    let num = row * column;
    $('table').find('tbody').find('tr').eq(row - 1).append('<td>' + num + '</td>');
  }
}