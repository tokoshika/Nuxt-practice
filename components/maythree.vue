<template>
  <div class="table-container">
    <table border="1">
      <tr>
        <th colspan="6"><h3>5月22日～26日</h3></th>
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
        <th>22</th>
        <th>23</th>
        <th>24</th>
        <th>25</th>
        <th>26</th>
      </tr>
      <tr>
        <td>1</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><span>有賀</span></td>
      </tr>
      <tr>
        <td>2</td>
        <td><span>有賀</span><br />川倉</td>
        <td><span>有賀</span></td>
        <td><span>川倉</span></td>
        <td></td>
        <td><span>川倉</span></td>
      </tr>
      <tr>
        <td>3</td>
        <td><span>川倉</span></td>
        <td>有賀<br />佐藤<br />川倉</td>
        <td>
          <span>有賀<br />川倉</span>
        </td>
        <td>有賀<br />佐藤<br />川倉</td>
        <td>有賀</td>
      </tr>
      <tr>
        <td>4</td>
        <td>川倉</td>
        <td><span>有賀</span><br />佐藤<br />川倉</td>
        <td><span>川倉</span></td>
        <td><span>川倉</span></td>
        <td><span>有賀</span><br />川倉</td>
      </tr>
      <tr>
        <td>5</td>
        <td><span>有賀</span></td>
        <td><span>川倉</span></td>
        <td></td>
        <td><span>川倉</span><br />佐藤</td>
        <td><span>川倉</span></td>
      </tr>
      <tr>
        <td>6</td>
        <td><span>有賀</span></td>
        <td><span>川倉</span></td>
        <td></td>
        <td><span>有賀</span><br />川倉</td>
        <td></td>
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
