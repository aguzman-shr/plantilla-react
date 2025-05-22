export default function ButtonSubmit({ disabled, loading, onClick, text }: { text: string, loading: boolean, disabled: boolean, onClick: (value: any) => void }) {
    return (
        <button
            type="submit"
            disabled={loading || disabled}
            onClick={onClick}
        >
            {loading ? 'Cargando...' : text}
        </button>
    );
}   