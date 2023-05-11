<template>
  <div class="table-container">
    <table border="1">
      <tr>
        <th colspan="6">
          <h3>5月15日～19日</h3>
        </th>
      </tr>
      <tr class="date">
        <th></th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
      <tr class="date">
        <th></th>
        <th>15</th>
        <th>16</th>
        <th>17</th>
        <th>18</th>
        <th>19</th>
      </tr>
      <tr>
        <td>1</td>
        <td>津川</td>
        <td class="need">募集</td>
        <td><span>津川</span></td>
        <td><span>津川</span></td>
        <td><span>津川</span><br />有賀</td>
      </tr>
      <tr>
        <td>2</td>
        <td>有賀</td>
        <td><span>津川</span><br />有賀</td>
        <td></td>
        <td>有賀<br />津川</td>
        <td><span>津川</span><br />有賀</td>
      </tr>
      <tr>
        <td>3</td>
        <td><span>有賀</span></td>
        <td>有賀<br />津川</td>
        <td><span>有賀</span><br />津川</td>
        <td><span>津川</span></td>
        <td>津川</td>
      </tr>
      <tr>
        <td>4</td>
        <td></td>
        <td><span class="need">募集</span></td>
        <td><span>有賀</span></td>
        <td>有賀</td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>5</td>
        <td>津川</td>
        <td><span>有賀</span></td>
        <td><span>有賀</span></td>
        <td><span>有賀</span></td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td>有賀<br />津川<br />佐藤</td>
        <td>有賀<br />津川<br />佐藤</td>
        <td>有賀<br />津川<br />佐藤</td>
        <td>有賀<br />津川<br />佐藤</td>
        <td>有賀<br />津川<br />佐藤</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  span {
    color: tomato;
  }
  .need {
    color: green;
  }
  .table-container {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  table {
    margin: 0;
  }
  .date {
    height: 20px;
  }
  th {
    background-color: rgb(236, 231, 231);
  }
  tr,
  td {
    height: 72px;
    text-align: center;
    padding: 6px;
  }
</style>
