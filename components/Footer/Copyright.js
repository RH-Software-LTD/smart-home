const styles = {
    section:"w-full",
    p: "w-full text-center text-sm text-[#FAFAFA] py-8 bg-[#000F37] pt-12 mt-16",

}

const Copyright = () => {
    return (
        <section className={styles.section}>
            <p className={styles.p}>Copyright © 2021 all rights reserved Smart Solutions</p>
        </section>
    );
};


export default Copyright;
