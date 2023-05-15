<template>
  <div class="main">
    <div>みなさんお疲れさまです</div>
    <div>名義貸しWEBへようこそ!</div>
    <div><p>iPad 横推奨</p></div>
    <div class="newsWrapper">
      <div class="news">
        <div class="responce">
          <p>NEWS</p>
          <h8>
            【授業公開について】<br />
            1学期 川倉さん（支援で）、津川さん（支援で）<br />
            2学期 佐藤さん（未定）、所さん（未定）<br />
            3学期 田原さん（6年家庭科で）、有賀（支援で）<br />
            ※只野さんは、2学期もしくは3学期 【指導計画の時数変更について】<br />
            天野さんに問い合わせたところ、局への提出が終わっているので、変更後の提出は必要ないとのことです。<br />
            監査については、内容が法令違反になっていないか・・ということがチェックされるとのことで、具体的には、<br />
            全体の半数以上を個別の指導をしているか、自立活動を適切に指導しているかなどがチェックされるそうです。<br />
            時数の変更があっても個別の時数が半数を下回らなければ問題ないそうです。<br />
            <br />
            【合同自立について】<br />
            6月初旬に持つ。ただし運動会への取り組みなどで全校で自立の時間を合わせることが難しい場合は、できる学年が集まって行う。
          </h8>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  p {
    color: red;
  }
  .newsWrapper {
    margin-left: 2rem;
    text-align: center;
    justify-content: center;
  }

  .news {
    text-align: left;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  @media screen and (min-width: 926px) {
    .responce {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    p {
      color: pink;
    }
  }
</style>
