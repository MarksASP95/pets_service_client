<script lang="ts">
    import { afterUpdate } from 'svelte';

	export let totalItems: number;
    export let pageSize: number;
    export let currentPage: number;
    export let pageParamName: string;

    interface PageItem {
        type: "page" | "dots";
        value: number;
    }

    const LEFT_ITEMS_MAX = 6;
    let pagesAmount = Math.ceil(totalItems / pageSize);

    let items: PageItem[] = [];
    
    function setItems() {
        const _items: PageItem[] = [];
		pagesAmount = Math.ceil(totalItems / pageSize);
        const overflowsLeftItems = pagesAmount > LEFT_ITEMS_MAX + 2;
        const leftSideItemsAmount = overflowsLeftItems ? LEFT_ITEMS_MAX : pagesAmount;
    
        const itemsLeftSide: PageItem[] = Array(leftSideItemsAmount).fill(0).map((_, i) => {
            return { type: "page", value: (i + 1) };
        });
    
        _items.push(...itemsLeftSide);
    
        if (overflowsLeftItems) {
            _items.push({ type: "dots", value: -1 });
    
            if (currentPage > itemsLeftSide[itemsLeftSide.length - 1].value && currentPage < pagesAmount) {
                const itemsMiddle: PageItem[] = [{ type: "page", value: currentPage }];
                _items.push(...itemsMiddle);
                _items.push({ type: "dots", value: -1 });
            }
    
            const itemsRightSide: PageItem[] = [{ type: "page", value: pagesAmount }];
            
            _items.push(...itemsRightSide);
        }

        items = _items; 
    }

    afterUpdate(async () => {
        setItems();
	});

    
</script>

<style lang="scss">

</style>

<div class="pagination-component d-flex justify-content-center">

    <ul class="pagination">
        {#if !!items.length}
            <li class="page-item" class:disabled={currentPage === 1}>
                <a href={`?${pageParamName}=${(currentPage - 1) || 0}`} class="page-link">Previous</a>
            </li>
            {#each items as page}
                {#if page.type === 'page'}
                    <li class="page-item">
                        <a class="page-link" class:active={page.value === currentPage} href={`?${pageParamName}=${page.value}`}>
                            {page.value}
                        </a>
                    </li>
                {/if}

                {#if page.type === 'dots'}
                    <li class="page-item">
                        <a class="page-link" href="#">
                            ...
                        </a>
                    </li>
                {/if}

                {/each}
            <li class="page-item" class:disabled={currentPage === pagesAmount}>
                <a href={`?${pageParamName}=${currentPage + 1}`} class="page-link">Next</a>
            </li>
            
        {/if}
    </ul>
</div>