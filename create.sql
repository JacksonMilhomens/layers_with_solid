drop table finance.installment;
drop table finance.transaction;

create schema finance;

create table finance.transaction (
	code text primary key,
	amount numeric,
	number_installments integer,
	payment_method text,
	date timestamp default now()
);

create table finance.installment (
	code text references finance.transaction (code),
	number integer,
	amount numeric,
	primary key (code, number)
);
