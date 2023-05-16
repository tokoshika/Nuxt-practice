<template>
  <header>
    <h1>あなたのお名前 お借りします</h1>
    <div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" class="color"><p>ホーム</p></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="color"><p>5月の早見表</p></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/june" class="color"><p>6月の早見表</p></NuxtLink>
          </li>
          <li>
            <NuxtLink to="/maycon" class="color"
              ><p>面談日程（5月）</p></NuxtLink
            >
          </li>
        </ul>
      </nav>
      <slot />
    </div>
  </header>
</template>

<style>
  nav {
    background-color: rgb(40, 38, 38);
    color: white;
  }
  header {
    text-align: center;
  }
  ul {
    justify-content: center;
    text-align: center;
    display: flex;
  }
  .color {
    color: white;
    font-size: 1rem;
    text-decoration: none;
  }
  li {
    color: red;
    list-style: none;
    margin-right: 2rem;
  }
</style>
