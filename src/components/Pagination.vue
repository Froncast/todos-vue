<template>
    <div class="pagination">
        <div class="pagination__left">
            <router-link
                    tag="div"
                    :to="'/page/' + prevPage"
                    class="pagination__item pagination--prev-page"
                    v-if="hasPrev()"
            ><a class="pagination__item-link"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.33334 1.18333L2.51668 5L6.33334 8.825L5.15834 10L0.158343 5L5.15834 0L6.33334 1.18333Z" fill="#B2B2B2"/>
            </svg>
            </a></router-link>
        </div>
    <div class="pagination__mid">
        <ul class="pagination-list-pages">
            <router-link
                    tag="li"
                    :to="'/page/' + 1"
                    class="pagination__item"
                    v-if="hasFirst()"
            >
                <a class="pagination__item-link">1</a>
            </router-link>
            <router-link
                    tag="li"
                    v-for="page in pages"
                    :to="'/page/' + page"
                    :key="page"
                    class="pagination__item"
            >
                <a class="pagination__item-link"
                   :class="{'pagination--active-page': currentPage === page}"
                >{{page}}</a>
            </router-link>
            <router-link
                    tag="li"
                    :to="'/page/' + totalPages"
                    class="pagination__item"
                    v-if="hasLast()"
            >
                <a class="pagination__item-link">{{totalPages}}</a>
            </router-link>
        </ul>
    </div>
        <div class="pagination__right">
            <router-link
                    tag="div"
                    :to="'/page/' + nextPage"
                    class="pagination__item pagination--next-page"
                    v-if="hasNext()"
            ><a class="pagination__item-link"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.15834 8.81667L3.97501 5L0.15834 1.175L1.33334 0L6.33334 5L1.33334 10L0.15834 8.81667Z" fill="#B2B2B2"/>
            </svg></a></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            currentPage: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            perPage: {
                type: Number,
                default: 10
            },
            pageRange: {
                type: Number,
                default: 2
            }
        },
        computed: {
            pages() {
              const pages = []
              for(let i = this.rangeStart; i <= this.rangeEnd; i++) {
                  pages.push(i)
              }
              return pages
            },
            rangeStart() {
              const start = this.currentPage - this.pageRange
                return (start > 0) ? start : 1
            },
            rangeEnd() {
                const end = this.currentPage + this.pageRange
                return (end < this.totalPages) ? end : this.totalPages
            },
            totalPages() {
              return Math.ceil(this.total / this.perPage)
            },
            prevPage() {
                return this.currentPage - 1
            },
            nextPage() {
                return this.currentPage + 1
            }
        },
        methods: {
            hasFirst() {
                return this.rangeStart !== 1
            },
            hasLast() {
                return this.rangeEnd < this.totalPages
            },
            hasPrev() {
                return this.currentPage > 1
            },
            hasNext() {
                return this.currentPage < this.totalPages
            },
        }
    }
</script>

<style scoped>
    .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        padding: 10px 15px;
        background: #ffffff;
    }

    .pagination-list-pages {
        display: flex;
        justify-content: center;
        list-style: none;
    }

    .pagination__item {
        cursor: pointer;
    }

    .pagination__item-link {
        display: block;
        padding: 5px 10px;
        text-align: center;
        text-decoration: none;
        color: #B2B2B2;
        transition: background .3s;
    }

    .pagination--active-page{
        background: #3691F4;
        border-radius: 2px;
        color: #ffffff;
    }

    .pagination--active-page .pagination__item-link {
        color: #ffffff;
    }

    .pagination__item-link:hover {
        background: #E3E3E3;
    }
</style>