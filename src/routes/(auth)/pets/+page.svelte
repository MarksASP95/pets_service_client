<script>
  import Pagination from '../../../components/Pagination.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Pets</h1>

<div class="row">
    {#each data.items as pet}
       <div class="col-sm-6 col-md-4 gy-5">
           <div class="card">
               <div class="card-header d-flex justify-content-between align-items-center">
                   <h3>{pet.name}</h3>
               </div>
               <div class="card-body">
                   <b>Owner: </b>{pet.owner.name}
               </div>
           </div>
       </div>
    {/each}
</div>

<br><br>
<Pagination 
    pageParamName="page"
    currentPage={data.page}
    pageSize={data.pageSize}
    totalItems={data.count}
/>