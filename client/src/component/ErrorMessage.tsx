interface IProps {
    message: string
}

const ErrorMessage = ({message}: IProps) => {
    return (
        <>
            <div className="bg-form"/>
            <div className="text-red-500 position-center">
                {message}
            </div>
        </>


    )
}

export default ErrorMessage