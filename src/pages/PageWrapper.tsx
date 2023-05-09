import './page-wrapper.scss'

export const PageWrapper = ({children} : {children: React.ReactNode} ) => {
  return <div className="page-wrapper">{children}</div>
}