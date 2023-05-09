<template>
  <header>
    <h1>あなたのお名前、お借りします</h1>
    <div>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/">HOME</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">5月の早見表</NuxtLink>
          </li>
        </ul>
      </nav>
      <slot />
    </div>
  </header>
</template>

<style>
  header {
    text-align: center;
  }
  ul {
    justify-content: center;
    text-align: center;
    display: flex;
  }

  li {
    list-style: none;
    margin-right: 2rem;
  }
</style>
