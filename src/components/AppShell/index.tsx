import Navbar from '@/components/layouts/Navbar';
type AppshellProps = {
    children: React.ReactNode;
}


const Appshell = (props:AppshellProps) => {
        const { children } = props;
    return (
        <main>
            <Navbar />
                {children}
            <div>
                footer
            </div>
        </main>
    );
};

export default Appshell;