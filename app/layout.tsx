import { getLocaleOnServer } from '@/i18n/server'

import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        <div className="overflow-x-auto">
          <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div>
        </div>
        <script>
          window.difyChatbotConfig = {
            token: 'cIyf6v62Jy5FK8x6',
            baseUrl: 'http://54.168.135.157'
          }
          </script>
          <script
          src="http://54.168.135.157/embed.min.js"
          id="cIyf6v62Jy5FK8x6"
          defer>
        </script>
      </body>
    </html>
  )
}

export default LocaleLayout
