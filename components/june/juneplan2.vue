<template>
  <div class="table-container">
    <table border="1">
      <tr>
        <th colspan="6"><h3>6月5日～6月9日</h3></th>
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
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
      </tr>
      <tr>
        <td>1</td>
        <td><span style="color: skyblue">振替</span></td>
        <td></td>
        <td></td>
        <td></td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>2</td>
        <td></td>
        <td><span></span></td>
        <td>有賀</td>
        <td>有賀</td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>3</td>
        <td></td>
        <td>有賀</td>
        <td>有賀</td>
        <td>有賀</td>
        <td></td>
      </tr>
      <tr>
        <td>4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>5</td>
        <td><span></span></td>
        <td></td>
        <td></td>
        <td></td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>6</td>
        <td></td>
        <td>有賀</td>
        <td>有賀</td>
        <td>有賀</td>
        <td>有賀</td>
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
