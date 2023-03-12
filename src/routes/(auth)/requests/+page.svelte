<script>
  import { formatToUSD } from '../../../utils/format.util';


    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>Requests</h1>

<div class="row">
     {#each data.items as req}
        <div class="col-sm-6 col-md-4">
            <div class="card">
                <div class="card-header d-flex justify-content-between align-items-center">
                    <h3>{req.pet.name}</h3>
                    <h4>{formatToUSD(req.total)}</h4>
                </div>
                <div class="card-body">
                    <ul>
                        {#each req.services as service}
                            <li>
                                {service.name}
                            </li>    
                        {/each}
                    </ul>
                </div>
                <div class="card-footer">
                    {#if req.status === 'due'}
                        <span class="badge text-bg-danger">Due</span>
                    {/if}
                    {#if req.status === 'in_process'}
                        <span class="badge text-bg-secondary">In process</span>
                    {/if}
                    {#if req.status === 'done'}
                        <span class="badge text-bg-success">Done</span>
                    {/if}
                    {#if req.status === 'cancelled'}
                        <span class="badge text-bg-light">Cancelled</span>
                    {/if}
                </div>
            </div>
        </div>
     {/each}
</div>

