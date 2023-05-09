import { MainNavigation } from "../MainNavigation/MainNavigation"

export const ErrorPage = () => {
  return (
    <div className="error">
      <MainNavigation />
      <div className="content">
        <h1>Something went wrong</h1>
      </div>
    </div>
  )
}
