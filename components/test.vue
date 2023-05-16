<template>
  <div class="meeting">
    <table border="1">
      <tr class="date">
        <!-- <th></th> -->
        <th colspan="1" class="grey">日時</th>
        <th colspan="3">5月22日(月)</th>
        <th colspan="3" class="grey">5月23日(火)</th>
        <th colspan="3">5月24日(水)</th>
        <th colspan="3" class="grey">5月25日(木)</th>
        <th colspan="3">5月26日(金)</th>
      </tr>
      <!-- 15時1段目 -->
      <tr>
        <th rowspan="3" class="grey">15:00</th>
        <td class="name">上村樹生</td>
        <td>川倉</td>
        <td>所</td>
        <td class="name grey">森内碧陸</td>
        <td class="grey">津川</td>
        <td class="grey">田原</td>
        <td class="name">会田 梛</td>
        <td>有賀</td>
        <td>田原</td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="name">上嶋望愛</td>
        <td>佐藤</td>
        <td>有賀</td>
      </tr>
      <!-- 15時2段目 -->
      <tr>
        <td class="name">国重紬希</td>
        <td>津川</td>
        <td>田原</td>
        <td class="name grey">橋本悠杜</td>
        <td class="grey">有賀</td>
        <td class="grey">田原</td>
        <td></td>
        <td></td>
        <td></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!-- 15時3段目 -->
      <tr>
        <td class="name">髙橋 蓮</td>
        <td>有賀</td>
        <td>伊藤</td>
        <td class="name grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <!-- 15時30分1段目 -->
      <tr>
        <th rowspan="1" class="grey">15:30</th>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name grey">八田 空</td>
        <td class="grey">津川</td>
        <td class="grey">所</td>
        <td class="name">西垣晴樹</td>
        <td>川倉</td>
        <td>佐藤</td>
      </tr>
      <!-- 16時0分1段目 -->
      <tr>
        <th rowspan="1" class="grey">16:00</th>
        <td class="name">志賀楓馬</td>
        <td>川倉</td>
        <td>田原</td>
        <td class="name grey">石井 悠樹</td>
        <td class="grey">所</td>
        <td class="grey">川倉</td>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name grey"></td>
        <td class="grey"></td>
        <td class="grey"></td>
        <td class="name"></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
  <br />
  <p>枠外</p>
  <div class="meeting">
    <table border="1">
      <tr class="date">
        <!-- <th></th> -->
        <th colspan="1">時間</th>
        <th colspan="3">5月24日(水)</th>
        <th colspan="3">5月29日(月)</th>
        <th colspan="3">5月29日(月)</th>
      </tr>
      <!-- 枠外1段目 -->
      <tr>
        <th rowspan="1" class="grey">15:30</th>
        <td class="name"></td>
        <td></td>
        <td></td>

        <td class="name">北川 煌</td>
        <td>所</td>
        <td>佐藤</td>

        <td class="name"></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <th rowspan="1" class="grey">16:00</th>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name">清水玲志</td>
        <td>有賀</td>
        <td>田原</td>
      </tr>
      <tr>
        <th rowspan="1" class="grey">16:30</th>
        <td class="name">菅原 瑠迦</td>
        <td>川倉</td>
        <td>田原</td>
        <td class="name"></td>
        <td></td>
        <td></td>
        <td class="name"></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  td,
  tr,
  th {
    font-size: 12px;
    /* padding: 2px; */
    width: 48px;
  }
  .meeting {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .name {
    font-weight: bold;
    color: rgb(46, 87, 209);
  }

  .grey {
    background-color: rgb(207, 200, 200);
  }
</style>
