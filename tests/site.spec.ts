import { expect, test } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

test('desktop: composição, navegação, contato, tema e fotos', async ({ page, context }) => {
  await page.setViewportSize({ width: 1672, height: 941 })
  const errors: string[] = []
  const failedResponses: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('response', response => { if (response.status() >= 400) failedResponses.push(`${response.status()} ${response.url()}`) })
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('/')
  await page.evaluate(() => document.fonts.ready)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await mkdir('artifacts', { recursive: true })
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Precisão industrialpara um futuromais eficiente.')
  await page.screenshot({ path: 'artifacts/desktop-hero.png' })

  await page.getByRole('button', { name: 'Solicitar orçamento', exact: true }).click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByText('A COMBINAR', { exact: true })).toHaveCount(2)
  await page.getByLabel('Sua solicitação').fill('Peça de aço inox, 10 unidades, prazo a confirmar.')
  await page.getByRole('button', { name: 'Copiar solicitação', exact: true }).click()
  await expect(page.getByRole('status')).toContainText('a solicitação ainda não foi enviada')
  await expect.poll(() => page.evaluate(() => navigator.clipboard.readText())).toContain('10 unidades')
  await page.keyboard.press('Escape')
  await expect(dialog).not.toBeVisible()
  await expect(page.getByRole('button', { name: 'Solicitar orçamento', exact: true })).toBeFocused()

  await page.getByRole('navigation').getByRole('link', { name: 'Capacidade' }).click()
  await expect(page).toHaveURL(/#capacidade$/)
  await page.evaluate(() => window.scrollTo({ top: document.querySelector('.authority-services')!.getBoundingClientRect().top + window.scrollY, behavior: 'instant' }))
  await page.mouse.move(0, 940)
  await page.screenshot({ path: 'artifacts/desktop-services.png' })
  await page.getByRole('button', { name: /Torneamento CNC/ }).click()
  await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('Torneamento CNC')
  await page.getByRole('dialog').getByRole('button', { name: 'Solicitar orçamento' }).click()
  await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('Seu projeto começa aqui.')
  await page.getByRole('button', { name: 'Fechar', exact: true }).click()

  await page.getByRole('navigation').getByRole('link', { name: 'Máquinas' }).click()
  await page.evaluate(() => window.scrollTo({ top: document.querySelector('.machines-location')!.getBoundingClientRect().top + window.scrollY, behavior: 'instant' }))
  await page.mouse.move(0, 940)
  await page.screenshot({ path: 'artifacts/desktop-machines.png' })
  await expect(page.locator('.machine-photo')).toHaveCount(3)
  await page.getByRole('button', { name: /Google Maps/ }).click()
  await expect(page.getByRole('dialog').getByRole('heading')).toHaveText('Localização A COMBINAR.')
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Falar com a Central Usinagem pelo WhatsApp' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: 'Ativar modo claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Ativar modo escuro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
  expect(errors).toEqual([])
  expect(failedResponses).toEqual([])
})

for (const width of [320, 360, 390, 768, 1024, 1440, 1672, 1920]) {
  test(`layout sem overflow horizontal em ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: width < 600 ? 844 : 941 })
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    const overflowing = await page.evaluate(() => [...document.querySelectorAll('main h1, main h2, main h3, .service-card, .machine-card, .map-panel, .site-header')].filter(el => {
      const box = el.getBoundingClientRect()
      return box.right > window.innerWidth + 1 || box.left < -1 || el.scrollWidth > el.clientWidth + 2
    }).map(el => ({ tag: el.tagName, class: el.className, text: el.textContent?.slice(0, 70) })))
    expect(overflowing).toEqual([])
    const documentOverflow = await page.evaluate(() => {
      if (document.documentElement.scrollWidth <= window.innerWidth) return []
      return [...document.querySelectorAll('body *')].filter(el => {
        const box = el.getBoundingClientRect()
        return box.right > window.innerWidth + 1 && box.width > 0
      }).map(el => ({ tag: el.tagName, class: el.getAttribute('class'), right: Math.round(el.getBoundingClientRect().right), text: el.textContent?.slice(0, 60) }))
    })
    expect(documentOverflow).toEqual([])
    if (width === 390) {
      await mkdir('artifacts', { recursive: true })
      await page.screenshot({ path: 'artifacts/mobile-full.png', fullPage: true })
      await page.getByRole('button', { name: 'Abrir navegação' }).click()
      await expect(page.getByRole('navigation')).toBeVisible()
      await page.getByRole('navigation').getByRole('link', { name: 'Serviços' }).click()
      await expect(page).toHaveURL(/#servicos$/)
      await expect(page.getByRole('navigation')).not.toBeVisible()
      await page.getByRole('button', { name: /Torneamento CNC/ }).click()
      await expect(page.getByRole('dialog')).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(page.getByRole('dialog')).not.toBeVisible()
      await page.locator('#contato').scrollIntoViewIfNeeded()
      await page.screenshot({ path: 'artifacts/mobile-location.png' })
    }
  })
}
