<template>
  <div class="table-container">
    <table border="1">
      <tr>
        <th colspan="6">5月8日～12日</th>
      </tr>
      <tr class="date">
        <th>/</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
      <tr class="date">
        <th>/</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
      </tr>
      <tr>
        <td>1</td>
        <td><span class="need">募集</span></td>
        <td><span class="need">募集</span></td>
        <td>有賀<br />津川</td>
        <td>津川</td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>2</td>
        <td><span>津川</span></td>
        <td>津川</td>
        <td><span>津川</span></td>
        <td><span>津川</span></td>
        <td><span>津川</span></td>
      </tr>
      <tr>
        <td>3</td>
        <td><span>佐藤</span></td>
        <td><span>川倉</span><br />有賀</td>
        <td></td>
        <td>有賀</td>
        <td>有賀<br />佐藤</td>
      </tr>
      <tr>
        <td>4</td>
        <td>川倉</td>
        <td>川倉</td>
        <td>川倉</td>
        <td>有賀<br />川倉</td>
        <td><span>川倉</span></td>
      </tr>
      <tr>
        <td>5</td>
        <td>津川 <br />川倉</td>
        <td>津川 <br />佐藤<br /><span>川倉</span></td>
        <td>津川 <br />川倉</td>
        <td><span>川倉</span></td>
        <td>川倉<br />佐藤<br /></td>
      </tr>
      <tr>
        <td>6</td>
        <td>佐藤<br />川倉</td>
        <td>佐藤<br />川倉</td>
        <td>佐藤<br />川倉</td>
        <td><span>佐藤</span><br />川倉</td>
        <td>佐藤<br />川倉</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  span {
    color: red;
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
  tr,
  td {
    height: 70px;
    text-align: center;
    padding: 6px;
  }
</style>
