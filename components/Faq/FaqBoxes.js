const styles = {
    section: 'space-y-4 w-[676px]',
    details: 'group rounded-xl bg-gray-50 p-6',
    questionArea: 'flex items-center',




}


const FaqBoxes = () => {
    return (
        <section className={styles.section}>
            <div className={styles.details}>
                <div className={styles.questionArea}>
                    <span className="relative p-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                            fill="black"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"
                        />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                        </svg>
                    </span>
                </div>
            </div>
        </section>
    )
}
