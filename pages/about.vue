<template>
  <div>
    【特別支援】名義貸し<span>早見表</span><br /><span>赤字</span
    >の名前は只野先生に貸し出されています。<br />必要な名義がありましたら、所の机の上にポストイットして下さい。
  </div>
  <div class="table-container">
    <table border="1">
      <tr>
        <th colspan="6">5月8日～12日</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        <th>11</th>
        <th>12</th>
      </tr>
      <tr>
        <td>1</td>
        <td></td>
        <td></td>
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
        <td>津川 <br />佐藤<br />川倉</td>
        <td>津川 <br />佐藤<br />川倉</td>
        <td>津川 <br />佐藤<br />川倉</td>
        <td>津川 <br /><span>佐藤</span><br />川倉</td>
        <td>津川 <br />佐藤<br />川倉</td>
      </tr>
    </table>
    <table border="1">
      <tr>
        <th colspan="6">5月15日～19日</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>15</th>
        <th>16</th>
        <th>17</th>
        <th>18</th>
        <th>19</th>
      </tr>
      <tr>
        <td>1</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
      </tr>
      <tr>
        <td>2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <table border="1">
      <tr>
        <th colspan="6">5月23日～27日</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
      <tr class="mainTr">
        <th>/</th>
        <th>23</th>
        <th>24</th>
        <th>25</th>
        <th>26</th>
        <th>27</th>
      </tr>
      <tr>
        <td>1</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
        <td>募集</td>
      </tr>
      <tr>
        <td>2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  .table-container {
    text-align: center;
    justify-content: center;
  }
  span {
    color: red;
  }
  .table-container {
    display: flex;
  }

  table {
    margin-left: 1rem;
  }
  .mainTr {
    height: 10px;
  }
  tr,
  td {
    height: 70px;
    text-align: center;
    padding: 6px;
  }
</style>
