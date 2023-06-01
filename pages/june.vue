<template>
  <div class="msg">
    <p>6月分【特別支援】名義貸し<span>早見表</span></p>
    <p><span>赤字</span>の名前は只野先生に貸し出されています。</p>
    <p>必要な名義がありましたら、所の机の上にポストイットして下さい。</p>
  </div>

  <div class="pla">
    <div class="component"><JuneJuneplan /></div>
    <div class="component"><JuneJuneplan2 /></div>
  </div>
</template>

<style scoped>
  .msg {
    width: 500px;
    margin: auto;
    line-height: 0.5rem;
  }
  p {
    text-align: left;
  }
  .pla {
    margin: 0;
    padding: 0;
    text-align: center;
    justify-content: center;
    background-color: whitesmoke;
  }

  span {
    color: tomato;
  }
  @media screen and (min-width: 926px) {
    .pla {
      display: flex;
      text-align: center;
      justify-content: center;
    }
    .component {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    span {
      color: tomato;
    }
  }
</style>
