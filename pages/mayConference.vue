<template>
  <div class="table-container">
    <table border="1">
      <tr class="date">
        <th></th>
        <th colspan="3">5月22日(月)</th>
        <th colspan="3">5月23日(火)</th>
        <th colspan="3">5月24日(水)</th>
        <th colspan="3">5月25日(木)</th>
        <th colspan="3">5月26日(金)</th>
      </tr>

      <!-- 15:00～ -->

      <tr>
        <td class="color-zero" rowspan="3">15:00</td>
        <div>
          <td class="color-one name">上村 樹生</td>
          <td class="color-one">川倉</td>
          <td class="color-one">所</td>
        </div>
        <div>
          <td class="color-two name">森内 碧陸</td>
          <td class="color-two">津川</td>
          <td class="color-two">田原</td>
        </div>
        <div>
          <td class="color-three name">会田 梛</td>
          <td class="color-three">有賀</td>
          <td class="color-three">田原</td>
        </div>
        <div>
          <td class="color-four"></td>
          <td class="color-four"></td>
          <td class="color-four"></td>
        </div>
        <div>
          <td class="color-five name">上嶋 望愛</td>
          <td class="color-five">佐藤</td>
          <td class="color-five">有賀</td>
        </div>
      </tr>
      <tr>
        <div>
          <td class="color-one name">国重 紬希</td>
          <td class="color-one">津川</td>
          <td class="color-one">田原</td>
        </div>
        <div>
          <td class="color-two name">橋本 悠杜</td>
          <td class="color-two">有賀</td>
          <td class="color-two">田原</td>
        </div>
        <div>
          <td class="color-three"></td>
          <td class="color-three"></td>
          <td class="color-three"></td>
        </div>
        <div>
          <td class="color-four"></td>
          <td class="color-four"></td>
          <td class="color-four"></td>
        </div>
        <div>
          <td class="color-five"></td>
          <td class="color-five"></td>
          <td class="color-five"></td>
        </div>
      </tr>
      <tr>
        <div>
          <td class="color-one name">髙橋 蓮</td>
          <td class="color-one">有賀</td>
          <td class="color-one">伊藤</td>
        </div>
        <div>
          <td class="color-two"></td>
          <td class="color-two"></td>
          <td class="color-two"></td>
        </div>
        <div>
          <td class="color-three"></td>
          <td class="color-three"></td>
          <td class="color-three"></td>
        </div>
        <div>
          <td class="color-four"></td>
          <td class="color-four"></td>
          <td class="color-four"></td>
        </div>
        <div>
          <td class="color-five"></td>
          <td class="color-five"></td>
          <td class="color-five"></td>
        </div>
      </tr>

      <!-- 15:30から -->
      <tr>
        <td class="color-zero" rowspan="1">15:30</td>
        <div>
          <td class="color-one"></td>
          <td class="color-one"></td>
          <td class="color-one"></td>
        </div>
        <div>
          <td class="color-two"></td>
          <td class="color-two"></td>
          <td class="color-two"></td>
        </div>
        <div>
          <td class="color-three"></td>
          <td class="color-three"></td>
          <td class="color-three"></td>
        </div>
        <div>
          <td class="color-four name">八田 空</td>
          <td class="color-four">川倉</td>
          <td class="color-four">所</td>
        </div>
        <div>
          <td class="color-five name">西垣 晴樹</td>
          <td class="color-five">川倉</td>
          <td class="color-five">佐藤</td>
        </div>
      </tr>

      <!-- 16:00から -->
      <tr>
        <td class="color-zero" rowspan="1">16:00</td>
        <div>
          <td class="color-one name">志賀 楓馬</td>
          <td class="color-one">川倉</td>
          <td class="color-one">田原</td>
        </div>
        <div>
          <td class="color-two name">石井 悠幹</td>
          <td class="color-two">所</td>
          <td class="color-two">川倉</td>
        </div>
        <div>
          <td class="color-three"></td>
          <td class="color-three"></td>
          <td class="color-three"></td>
        </div>
        <div>
          <td class="color-four"></td>
          <td class="color-four"></td>
          <td class="color-four"></td>
        </div>
        <div>
          <td class="color-five"></td>
          <td class="color-five"></td>
          <td class="color-five"></td>
        </div>
      </tr>

      <!-- 枠外 -->
      <tr>
        <td class="color-zero" rowspan="1">枠外</td>
        <div>
          <td class="color-one"></td>
          <td class="color-one"></td>
          <td class="color-one"></td>
        </div>
        <div>
          <td class="color-two"></td>
          <td class="color-two"></td>
          <td class="color-two"></td>
        </div>
        <div>
          <td class="color-three name">24日(水)<br />菅原 瑠迦<br />16:30</td>
          <td class="color-three">川倉</td>
          <td class="color-three">田原</td>
        </div>
        <div>
          <td class="color-four name">29日(月)<br />北川 煌<br />15:00</td>
          <td class="color-four">所</td>
          <td class="color-four">佐藤</td>
        </div>
        <div>
          <td class="color-five name">29日(月)<br />清水 玲志<br />16:00</td>
          <td class="color-five">有賀</td>
          <td class="color-five">津川</td>
        </div>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  span {
    color: tomato;
  }
  .name {
    font-size: 1rem;
    font-weight: bold;
  }
  /* .color-zero {
    background-color: grey;
  } */
  .color-one {
    background-color: white;
  }
  .color-two {
    background-color: #e5f2ff;
  }
  .color-three {
    background-color: white;
  }
  .color-four {
    background-color: #e5f2ff;
  }
  .color-five {
    background-color: white;
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
  .table-container {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  th,
  .color-zero {
    background-color: rgb(83, 83, 83);
    color: white;
  }
  tr,
  td {
    height: 72px;
    text-align: center;
    padding: 6px;
  }
</style>
