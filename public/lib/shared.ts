export function setOptions(select: JQuery, options: {
  value: string;
  text: string;
}[]): void {
  select.empty();

  options.forEach(({ value, text }) => {
    $('<option>')
      .attr({ value })
      .text(text)
      .appendTo(select);
  });
}

export function success(): void {
  window.app.alertSuccess();
}
export function error(err: Error): void {
  window.app.alertError(err);
  setTimeout(() => { throw err; }, 0);
}

export function requestDelete<A, B>(path: string, data: A): Promise<B> {
  return Promise.resolve($.ajax({
    method: 'DELETE',
    url: `${window.config.relative_path}${path}`,
    data: JSON.stringify(data),
    processData: false,
    contentType: 'application/json',
  }));
}
export function requestPost<A, B>(path: string, data: A): Promise<B> {
  return Promise.resolve($.ajax({
    method: 'POST',
    url: `${window.config.relative_path}${path}`,
    data: JSON.stringify(data),
    processData: false,
    contentType: 'application/json',
  }));
}

export function confirm(message: string): Promise<boolean> {
  return new Promise(
    (resolve) => window.bootbox.confirm(message, resolve)
  );
}

export function unescape(escaped: string): string {
  return $('<span>').html(escaped).text();
}
