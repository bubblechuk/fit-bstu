import json
from selenium import webdriver
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

firefox_options = Options()
driver = webdriver.Firefox(options=firefox_options)

driver.get("https://it.belstu.by")
data = []

while True:
    try:
        # Ожидание загрузки элементов
        WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "post-thumb")))
        
        post_thumbs = driver.find_elements(By.CLASS_NAME, "post-thumb")
        post_titles = driver.find_elements(By.CLASS_NAME, "post-title")
        post_texts = driver.find_elements(By.CLASS_NAME, "post-text")
        dates = driver.find_elements(By.CLASS_NAME, "date")
        
        for index in range(len(post_thumbs)):
            try:
                # Переизвлечение элементов для текущего индекса
                print("Extracting img and title...")
                post_thumb = driver.find_elements(By.CLASS_NAME, "post-thumb")[index]
                post_title = driver.find_elements(By.CLASS_NAME, "post-title")[index]
                post_text = driver.find_elements(By.CLASS_NAME, "post-text")[index]
                date = driver.find_elements(By.CLASS_NAME, "date")[index]
                
                # Извлечение изображения
                figure = post_thumb.find_element(By.TAG_NAME, "figure")
                img = figure.find_element(By.TAG_NAME, "img")
                src = img.get_attribute("src")

                # Извлечение заголовка
                h3 = post_title.find_element(By.TAG_NAME, "h3")
                a = h3.find_element(By.TAG_NAME, "a")
                title = a.text
                news_url = a.get_attribute("href")
                
                # Текст новости (малый контент)
                try:
                    p = post_text.find_element(By.TAG_NAME, "p")
                    small = p.text
                except:
                    small = ""

                # Извлечение даты
                day = date.find_element(By.CLASS_NAME, "day").text
                month = date.find_element(By.CLASS_NAME, "month").text
                year = date.find_element(By.CLASS_NAME, "year").text

                # Переход на страницу новости
                driver.get(news_url)
                
                # Извлечение большого контента
                try:
                    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS_NAME, "post-text")))
                    news_content_element = driver.find_element(By.CLASS_NAME, "post-text")
                    big_content_html = news_content_element.get_attribute("outerHTML")
                except NoSuchElementException:
                    big_content_html = ""

                # Возвращение на предыдущую страницу
                driver.back()

                # Сохранение данных
                data.append({
                    "image": src,
                    "date": {
                        "day": day,
                        "month": month,
                        "year": year
                    }, 
                    "title": title,
                    "content": {
                        "big": big_content_html,
                        "small": small
                    },
                    "extra": {
                        "urls": [],
                        "others": []
                    }
                })
            except Exception as e:
                print(f"Error extracting data at index {index}: {e}")
                continue

        # Навигация на следующую страницу
        try:
            next_button = driver.find_element(By.CLASS_NAME, "next")
            next_button.click()
            WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.CLASS_NAME, "post-thumb")))
        except NoSuchElementException:
            print("No more pages to scrape.")
            break
    except Exception as e:
        print(f"Error on page: {e}")
        break


json_data = json.dumps(data, indent=4)
with open("news.json", "w") as outfile:
    outfile.write(json_data)

driver.quit()
