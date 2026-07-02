export default function Card({ children, className = "" }) {

    return (

        <div
            className={`rounded-3xl bg-white shadow-lg border border-slate-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${className}`}
        >

            {children}

        </div>

    );

}