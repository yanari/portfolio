/*
 * <html> lives in the per-locale layouts (`app/(root)` = English, `app/pt` =
 * Portuguese) so each page gets the right `lang` while staying static.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children
}
