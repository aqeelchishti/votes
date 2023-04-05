<script>
  import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
  import CreatePollForm from './components/CreatePollForm.svelte';
  import Tabs from './components/shared/Tabs.svelte';
  import PollList from './components/PollList.svelte';

  let items = ['Current Polls', 'Add New Poll'];
  let activeItem = 'Current Polls';

  const tabChange = (e) => {
    activeItem = e.detail;
  };

  const handleAdd = () => {
    activeItem = 'Current Polls';
  };
</script>

<Header />
  <main class="bg-black-400">
    <Tabs {items} {activeItem} on:tabChange={tabChange}/>
    {#if activeItem === 'Current Polls'}
      <PollList />
    {:else if activeItem === 'Add New Poll'}
      <CreatePollForm on:add={handleAdd}/>
    {/if}
  </main>
<Footer />

<style>
  main{
    width: 100%;
    max-width: 960px;
    margin: 0 auto 125px auto;
  }
</style>
